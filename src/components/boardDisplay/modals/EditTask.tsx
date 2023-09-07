import Button from "../../button/Button"
import Select from "../../select/Select"

export default function EditTask() {
    return (
        <form>

            <h2>
                Add New Task
            </h2>

            <label htmlFor="title">

                <strong>
                    Title
                </strong>

                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="e.g. Take coffee break"
                />

            </label>

            <label htmlFor="description">

                <strong>
                    Description
                </strong>

                <textarea
                    id="description"
                    name="description"
                    placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                ></textarea>

            </label>

            <div>

                <strong>
                    Status
                </strong>

                <Select
                    value={'Todo'}
                    onChange={() => undefined}
                    options={['Todo', 'Doing', 'Done']}
                />

            </div>

            <Button>
                Create Task
            </Button>

        </form>
    )
}