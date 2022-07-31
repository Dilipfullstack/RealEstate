import '../assets/styles/style.css';

const GeneralInfo = ({formData, setFormData}) => {

    console.log(formData);
    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(previousData => {
            return {...previousData, [name]: value}
        });
        console.log(formData);
    }

    return (
        <form class='form-container'>
            <label for='name'>Name <br/>
                <input type='text' id='name' name='name' placeholder='Owner' onChange={(e) => {handleFormData(e)}} class='input'/>
            </label><br/>

            <label for='mobile'>Mobile <br/>
                <input type='text' id='mobile' name='mobile' placeholder='Enter Mobile Number' onChange={(e) => {handleFormData(e)}} class='input'/>
            </label><br/>

            <label for='postedBy'>Posted By <br/>
                <select id='postedBy' name='postedBy' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Posted By'>Posted By</option>
                    <option value='Owner'>Owner</option>
                    <option value='Dealer'>Dealer</option>
                    <option value='Relative'>Relative</option>
                    <option value='Other'>Other</option>
                </select>
            </label><br/>

            <label for='saleType'>Sale Type <br/>
                <select id='saleType' name='saleType' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Please Select'>Please Select</option>
                    <option value='Standard Sales'>Standard Sales</option>
                    <option value='Bank Owned Sales'>Bank Owned Sales</option>
                    <option value='Short Sales'>Short Sales</option>
                </select>
            </label><br/>

            <label for='featuredPackage'>Featured Package <br/>
                <select id='featuredPackage' name='featuredPackage' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Please Select'>Please Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label for='PPDPackage'>PPD Package <br/>
                <select id='PPDPackage' name='PPDPackage' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Please Select'>Please Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>
        </form>
    )
}

export default GeneralInfo;