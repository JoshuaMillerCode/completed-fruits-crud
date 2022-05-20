const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.fruit)
        const fruit = this.props.fruit
        return (
            <DefaultLayout title="Show">
                <div>
                    <p class="content">The {fruit.name}'s color is {fruit.color}.</p>
                    <p>
                        {
                            fruit.readyToEat
                                ?
                                "It's ready to eat"
                                :
                                "It's not ready to eat...Can't touch this"
                        }
                    </p>
                    <button><a href={'/fruits'}>Back</a></button>
                    <hr />
                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={`/fruits/${fruit._id}/edit`}>{`Edit ${fruit.name}`}</a></button>
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show