const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const fruit = this.props.fruit
        return (
            <DefaultLayout title="Edit">
                <h1>{fruit.name.toUpperCase()} Edit Page</h1>
                <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={fruit.name} />
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={fruit.color}/>
                    <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={fruit.readyToEat}/>
                    <input type="submit" value="Edit Fruit"/>
                </form>
            </DefaultLayout>
        )
    }
}