type Handle = () => Promise<string>
const name: string = 'John Doe'
const person: { name: string } = { name }
const handle: Handle = () => Promise.resolve(person.name)

handle().then((res) => {
  console.log(res)
})
