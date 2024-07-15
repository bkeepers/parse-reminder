module.exports = {
  refine (context, results) {
    if (context.option.startOfDay) {
      results.forEach(result => {
        if (!result.start.isCertain('hour') && !result.start.tags().has('casualReference/noon')) {
          result.start.imply('hour', context.option.startOfDay)
          result.start.imply('minute', 0)
          result.start.imply('second', 0)
          result.tags.StartOfWorkDayRefiner = true
        }
      })
    }

    return results
  }
}
