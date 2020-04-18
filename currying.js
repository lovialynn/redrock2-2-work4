function addSum() {
 let _args = [].slice.call(arguments); 
    let adder = function () {
        let _adder = function() {
            _args.push(...arguments);
            return _adder;
        };

        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    return adder(..._args);
}