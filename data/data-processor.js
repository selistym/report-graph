const OTHERS_GROUP = 'Others';

function processPieChartData(data, groupByOption, customSortingFunction, minimalLevel = 0.006) {
    data = data.filter(d => d[groupByOption] !== '');

    const internalMap = new Map();
    data.forEach(d => internalMap[d[groupByOption]] ? internalMap[d[groupByOption]]++ : internalMap[d[groupByOption]] = 1);

    const defaultSortingFunction = (a, b) => {
        return b.key === OTHERS_GROUP
            ? -1
            : a.key === OTHERS_GROUP
                ? Number.MAX_VALUE
                : b.value.value - a.value.value
    };

    return d3.nest()
        .key(d => internalMap[d[groupByOption]] / data.length > minimalLevel ? d[groupByOption] : OTHERS_GROUP)
        .rollup(d => {
            const values = d.map(response => response[CURRENT_SALARY]).sort((a, b) => a - b);
            const raises = d.map(response => response[CURRENT_SALARY] - response[PREVIOUS_SALARY]).sort((a, b) => a - b);
            return {
                value: d.length,
                extra: {
                    percentageValue: Math.round(d.length / data.length * 100),
                    quartiles: [
                        d3.quantile(values, .25),
                        d3.quantile(values, .5),
                        d3.quantile(values, .75)
                    ],
                    meanSalary: Math.round(d3.mean(values) / 1000) * 1000,
                    medianRaise: d3.median(raises)
                }
            }
        })
        .entries(data)
        .sort(customSortingFunction ? customSortingFunction : defaultSortingFunction);
}

function processLineChartData(data, xOption, trellisingOption) {
    data = data.filter(d => parseInt(d[xOption]) > 0);

    return d3.nest()
        .key((d) => {
            const suffix = xOption === CURRENT_SALARY
                ? ', 2017'
                : xOption === PREVIOUS_SALARY
                    ? ', 2016'
                    : '';
            // return d[trellisingOption] + suffix;
            return d[trellisingOption];
        })
        .key((d) => {
            return Math.round(d[xOption] / 5000) * 5000;
        })
        .rollup((d) => {
            return d.length;
        })
        .entries(data)
        .map(group => {
            return {
                key: group.key,
                values: group.values.sort(function (x, y) {
                    return d3.ascending(parseInt(x.key), parseInt(y.key));
                })
            };
        })
        .map(group => {
            let integral = 0;
            for (let i = 0; i < group.values.length - 1; i++) {
                integral += (group.values[i].value + group.values[i + 1].value) / 2;
            }
            const coefficient = 100 / integral;
            return {
                key: group.key,
                values: group.values.map((point) => {
                    return {
                        key: point.key,
                        groupKey: group.key,
                        value: Math.round(point.value * coefficient * 10) / 10,
                        absoluteValue: point.value
                    };
                })
            };
        });
}

function processBoxPlotData(data, xOption, yOption) {
    data = data.filter(d => parseInt(d[xOption]) > 0 && parseInt(d[yOption]) > 0);

    return d3.nest()
        .key((d) => {
            return xOption === TOTAL_EXPERIENCE ? Math.round(d[xOption]) : d[xOption];
        })
        .rollup((d) => {
            return d;
        })
        .entries(data)
        .map(group => {
            return {
                key: group.key,
                values: group.value.sort(function (x, y) {
                    return d3.ascending(parseInt(x[yOption]), parseInt(y[yOption]));
                })
            };
        });
}