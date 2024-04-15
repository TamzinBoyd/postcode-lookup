# Frontend Test

This is the frontend test for Remarkable.net. 

What follows is a common feature that you would be expected to build. It consists of a Postcode Lookup / Click & Collect feature of a website.

You are given a blank HTML file to start with. Please implement the HTML, CSS and JavaScript to complete the tasks below to the best of your ability.

The code submitted back to us will then be reviewed internally.

## Tasks

* Recreate the interface as show in the designs in the `/designs` folder
* Ensure tabs are interactive
* Implement a modal with the usual expected modal features

### Postcode tab  

* Recreate as per the UI
* Pressing `Look up address >` should fail gracefully with a message back to the user
* Pressing `Enter address manually >` should switch out the `Enter Postcode` section and replace with the input fields

### Click & Collect tab

* Pressing `Search` must open a modal
* The modal must consume the the JSON data as stated below
* All UI sections in the modal must update again with when the user updates the postcode and presses `Search` again
* Integrate Google Maps and place a marker at the specified Lat / Lng coordinates

## API

* `/api` - returns all 100 of the fake data addresses
* `/api?postcode=NG` - returns a filtered down list of results based on `data.filter(d => d.address.postcode.indexOf(query.postcode) > -1)`