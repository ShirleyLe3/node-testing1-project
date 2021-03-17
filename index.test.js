const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    // ✨ test away
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // ✨ test away
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // ✨ test away
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    // ✨ test away
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
  })
})

const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
it('should run the tests', function() {
  expect(true).toBe(true);
});

describe('enhancer.js', function() {
  describe('.succeed()', function() {
    it('should increase enhancement by 1 if under 20', function() {
      expect(succeed({ enhancement: 15 })).toEqual({ enhancement: 16 });
      expect(succeed({ enhancement: 10 })).toEqual({ enhancement: 11 });
      expect(succeed({ enhancement: 1 })).toEqual({ enhancement: 2 });
      expect(succeed({ enhancement: 0 })).toEqual({ enhancement: 1 });
      expect(succeed({ enhancement: 19 })).toEqual({ enhancement: 20 });
    })

    it('should keep enhancement the same if it is 20', function() {
      expect(succeed({ enhancement: 20 })).toEqual({ enhancement: 20 });
    });
  });

  describe('.fail()', function() {
    it('should decrease durability by 5 if enhancement is less than 15', function() {
      expect(fail({ enhancement: 14, durability: 30 })).toEqual({ enhancement: 14, durability: 25 });
    })

    it('should decrease durability by 10 if enhancement is 15 or more', function() {
      expect(fail({ enhancement: 15, durability: 60 })).toEqual({ enhancement: 15, durability: 50 });
      expect(fail({ enhancement: 16, durability: 69 })).toEqual({ enhancement: 16, durability: 59 });
    })

    it('should decrease enhancement by 1 if enhancement is 16 or more', function() {
      expect(fail({ enhancement: 18, durability: 100 })).toEqual({ enhancement: 17, durability: 90 });
      expect(fail({ enhancement: 19, durability: 69 })).toEqual({ enhancement: 18, durability: 59 });
      expect(fail({ enhancement: 17, durability: 20 })).toEqual({ enhancement: 16, durability: 10 });
    })
  })
  
  describe('.repair()', function() {
    it('should return a new item with durability of 100', function() {
      expect(repair({ durability: 10 })).toEqual({ durability: 100 });
      expect(repair({ durability: 99 })).toEqual({ durability: 100 });
      expect(repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });

});

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
