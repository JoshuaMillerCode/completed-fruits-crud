const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New">
                <h1>Create Fruit Page</h1>
                <form action="/fruits" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/>
                    <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat"/>
                    <input type="submit" value="Create Fruit"/>
                </form>
            </DefaultLayout>
        )
    }
}