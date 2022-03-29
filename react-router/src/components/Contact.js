export default function Contact () {
    return (
        <div className="contactUs">
            <h1>Contact Us</h1>
            <form>
              <label for="fname">First Name:</label><br/>
              <input type="text" id="fname" name="fname" /><br/>
              <label for="lname">Last Name:</label><br/>
              <input type="text" id="lname" name="lname" /><br/>
              <label for="phone">Phone Number:</label><br/>
              <input type="number" id="phone" name="phone" /><br/>
            </form>
        </div>
    )
}