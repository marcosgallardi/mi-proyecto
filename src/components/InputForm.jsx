export const InputForm = (props) => {
    return (
        <>
            <div className="col-4">
                <label className="form-label">{ }</label>
                <input value={props.value} required={props.required} type="text" className="form-control" name={props.name} placeholder={props.title} onChange={props.onChange} />
            </div>
        </>
    )
}