const chrono = require('chrono-node')

const matcher = /^remind (me)(?: to )?(.*)$/

module.exports = (input, from) => {
  const match = input.match(matcher)
  if (!match) {
    // This doesn't look like a reminder, so bail early
    return null
  }

  // Pull out the initial matches
  let [, who, what] = match

  // Use chrono to extract the `when` from the `what`
  const when = chrono.parse(what, from, {forwardDate: true})

  // Remove any time expressions from the `what`
  when.forEach(w => {
    what = what.replace(w.text, '')
  })

  // Clean up whitespace and common connecting words
  what = what.trim()
  what = what.replace(/^(to|that) /, '').replace(/ on$/, '')

  return {who, what, when: when[0].start.date()}
}
