var app = new Vue({
    el: '#app',
    data: {
        group1: {
            p1percent: Math.floor(Math.random() * 71) + 30,
            p2percent: Math.floor(Math.random() * 71) + 30,
            p3percent: Math.floor(Math.random() * 71) + 30,
            p4percent: Math.floor(Math.random() * 71) + 30,
            p5percent: Math.floor(Math.random() * 71) + 30,
            p6percent: Math.floor(Math.random() * 71) + 30
        },
        group2: {
            p1percent: Math.floor(Math.random() * 71) + 30,
            p2percent: Math.floor(Math.random() * 71) + 30,
            p3percent: Math.floor(Math.random() * 71) + 30,
            p4percent: Math.floor(Math.random() * 71) + 30,
            p5percent: Math.floor(Math.random() * 71) + 30,
            p6percent: Math.floor(Math.random() * 71) + 30
        }
    },
    computed: {
        g1fullEndPath: function () {
            let str = null;
            let vm = this;
            for (var point in vm.g1points) {
                str = str + this.g1points[point].x + "," + this.g1points[point].y + " ";
            }
            return str;
        },
        g1points: function () {
            return {
                "one": this.calcDistance(this.group1.p1percent, 1),
                "two": this.calcDistance(this.group1.p2percent, 2),
                "three": this.calcDistance(this.group1.p3percent, 3),
                "four": this.calcDistance(this.group1.p4percent, 4),
                "five": this.calcDistance(this.group1.p5percent, 5),
                "six": this.calcDistance(this.group1.p6percent, 6),
            };
        },
        g2fullEndPath: function () {
            let str = null;
            let vm = this;
            for (var point in vm.g2points) {
                str = str + this.g2points[point].x + "," + this.g2points[point].y + " ";
            }
            return str;
        },
        g2points: function () {
            return {
                "one": this.calcDistance(this.group2.p1percent, 1),
                "two": this.calcDistance(this.group2.p2percent, 2),
                "three": this.calcDistance(this.group2.p3percent, 3),
                "four": this.calcDistance(this.group2.p4percent, 4),
                "five": this.calcDistance(this.group2.p5percent, 5),
                "six": this.calcDistance(this.group2.p6percent, 6),
            };
        }
    },
    methods: {
        calcDistance: function (percent, pointnumber) {
            let churn = function (startval, endval) {
                return ((percent * .01) * (endval - startval)) + startval;
            };
            switch (pointnumber) {
                case 1:
                    return {
                        x: churn(323.8, 75.6),
                        y: churn(338.6, 195.3)
                    };
                case 2:
                    return {
                        x: churn(323.8, 75.6),
                        y: churn(429.4, 572.7)
                    };
                case 3:
                    return {
                        x: churn(402.5, 402.5),
                        y: churn(474.9, 761.5)
                    };
                case 4:
                    return {
                        x: churn(481.2, 729.4),
                        y: churn(429.4, 572.7)
                    };
                case 5:
                    return {
                        x: churn(481.2, 729.4),
                        y: churn(338.6, 195.3)
                    };
                case 6:
                    return {
                        x: churn(402.5, 402.5),
                        y: churn(291.1, 6.5)
                    };

                default:
                    break;
            }

        }
    }
});