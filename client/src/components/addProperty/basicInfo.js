import '../assets/styles/style.css';

const BasicInfo = ({formData, setFormData}) => {
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
            <label for='propertyType'> Property Type <br/>
                <select id='propertyType' name='propertyType' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Select Property Type'>Select Property Type</option>
                    <option value='Residential'>Residential</option>
                    <option value='Commercial'>Commercial</option>
                    <option value='Industrial'>Industrial</option>
                    <option value='Investing'>Investing</option>
                </select>
            </label><br/>

            <label for='price'>Price <br/>
                <input type='text' id='price' name='price' placeholder='Example: 100000' onChange={(e) => handleFormData(e)} class='input'/>
            </label><br/>

            <label for='propertyAge'>Property Age <br/>
                <select id='propertyAge' name='propertyAge' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Select Property Age'>Select Property Age</option>
                    <option value='0-5'>0-5</option>
                    <option value='5-10'>5-10</option>
                    <option value='10-15'>10-15</option>
                    <option value='More Than 15 Years'>More Than 15 Years</option>
                </select>
            </label><br/>

            <label for='propertyDiscription'>Property Discription <br/>
                <input type='text' id='propertyDiscription' name='propertyDiscription' onChange={(e) => handleFormData(e)} class='input'/>
            </label><br/>

            <label for='negotiable'>Negotiable <br/>
                <select id='negotiable' name='negotiable' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Select Negotiable'>Select Negotiable</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label for='ownership'>Ownership <br/>
                <select id='ownership' name='ownership' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Select Ownership'>Select Ownership</option>
                    <option value='Individual Ownership'>Individual Ownership</option>
                    <option value='Joint Ownership'>Joint Ownership</option>
                    <option value='Ownership By Way Of Nomination'>Ownership By Way Of Nomination</option>
                </select>
            </label><br/>

            <label for='propertyApproved'>Property Approved <br/>
                <select id='propertyApproved' name='propertApproved' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Property Approved'>Property Approved</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label for='bankLoan'>Bank Loan <br/>
                <select id='bankLoan' name='bankLoan' onChange={(e) => handleFormData(e)} class='selection-input'>
                    <option value='Bank Loan'>Bank Loan</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>
        </form>
    )
};

export default BasicInfo;