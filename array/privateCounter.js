function privateCounter() {
    let _counter = 0

    return {
        add : function(num)  {_counter += num},
        retrive : function() {return _counter}
    }

}

counter = privateCounter()
counter.add(2)
counter.add(2)
console.log(counter.retrive())
