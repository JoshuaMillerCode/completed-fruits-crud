const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() {
        // Object Destructuring
        const { fruits } = this.props
        return (
            <DefaultLayout title="Index" name='Poornima'>
                <div>
                    <nav>
                        <a class='link' href="/fruits/new">Create a New Fruit</a>
                    </nav>
                    <ul>
                        {
                            fruits.map(fruit => {
                                return (
                                    <li key={fruit._id}>
                                        <p>The <a href={`/fruits/${fruit._id}`}>{fruit.name}'s</a> color is {fruit.color}.</p>
                                        <p>{fruit.readyToEat ? 'READY' : 'NOT READY'}</p>
                                        <form action={`/fruits/${fruit._id}?_method=DELETE`}  method="POST">
                                            <input type="submit" value="DELETE" />
                                        </form>
                                 
                                        <button><a href={`/fruits/${fruit._id}/edit`}>{`Edit ${fruit.name}`}</a></button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index