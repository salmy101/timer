
const input = process.argv.slice(2)
const timer = function(array) {
  for(const time of array) {
    setTimeout(() => {
      process.stdout.write("!")
    }, time * 1000) // if we only put in the single digits it wont be a visvible lag so lets make them into millisecs
  }
}
timer(input)

/* No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.

An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
8?*/