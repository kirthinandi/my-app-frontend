function Filters({checked, setChecked}) {


    function handleTypeChange() {
        setChecked(!checked)
    }

    return (
    <div>
        <label htmlFor='type'>Happy</label>
        <input
        type='checkbox'
        name='category'
        onChange={handleTypeChange}
        checked={checked}
        />

        <label htmlFor='type'>Angry</label>
        <input
        type='checkbox'
        name='category'
        onChange={handleTypeChange}
        checked={checked}
        />
        
        <label htmlFor='type'>Sad</label>
        <input
        type='checkbox'
        name='category'
        onChange={handleTypeChange}
        checked={checked}
        />

    </div>
    )
}

export default Filters;