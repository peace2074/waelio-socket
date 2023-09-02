
export default defineEventHandler((event) => {

  const id = event.context.params?.id

  // Do what you need to do with the id

  return { data: id }
})