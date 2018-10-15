import React from 'react'
import { MainHeader } from './main-header';
import { MainFooter } from './footer';

export class Units extends React.Component {
  render() {
    return <div><MainHeader imagePath={ window.location.origin + '/units.jpg'} />

    <div class="unitsSection">
      <div class="section">
        <p>
          Whether you are an individual or a business customer, Shurguard has a solution for your storage space needs! We offer
          a full range of self-store unit sizes starting from 5'x5' units the size of a large closet, all the way to 15'x25'
          units that are each as spacious as a 4-bedroom apartment. Every one of these units is clean, dry and completely secure,
          thus ensuring complete peace of mind when you self store belongings with us.
        </p>
    
        <p>
          Shurguard strives to be a one-stop shop as far as public storage needs are concerned. To save you a trip to the store,
          Shurguard offers sturdy locks for purchase on location.
        </p>
      </div>
      <div class="unitsDescription">
        <table class="table table-bordered table-striped table-responsive">
          <thead>
            <tr>
              <th>
                Size
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                5X5
              </td>
              <td>
                THIS UNIT IS THE SIZE OF A LARGE CLOSET
              </td>
            </tr>
            <tr>
              <td>
                5X8
              </td>
              <td>
                THIS UNIT IS THE SIZE OF A SMALL WALK IN CLOSET
              </td>
            </tr>
            <tr>
              <td>
                5X10
              </td>
              <td>
                THIS UNIT IS THE SIZE OF A WALK IN CLOSET
              </td>
            </tr>
            <tr>
              <td>
                5X12.5
              </td>
              <td>
                THIS UNIT IS THE SIZE OF A SMALL BEDROOM
              </td>
            </tr>
            <tr>
              <td>
                6X10
              </td>
              <td>
                THIS UNIT IS A LITTLE LARGER THAN A WALK IN CLOSET
              </td>
            </tr>
            <tr>
              <td>
                8X10
              </td>
              <td>
                THIS IS THE SIZE OF A LARGE BATHROOM </td>
            </tr>
            <tr>
              <td>
                10X10
              </td>
              <td>
                THIS UNIT IS THE SIZE OF A ONE BEDROOM APARTMENT </td>
            </tr>
            <tr>
              <td>
                10X12.5
              </td>
              <td>
                THIS IS THE SIZE OF A LARGE KITCHEN
              </td>
            </tr>
            <tr>
              <td>
                10X15
              </td>
              <td>
                THIS UNIT IS THE SIZE OF A TWO BEDROOM APARTMENT
              </td>
            </tr>
            <tr>
              <td>
                10X17.5
              </td>
              <td>
                THIS IS THE SIZE OF A LARGE DINNING ROOM
              </td>
            </tr>
            <tr>
              <td>
                10X20
              </td>
              <td>
                THIS IS THE SIZE OF A LIVING ROOM
              </td>
            </tr>
            <tr>
              <td>
                10X25
              </td>
              <td>
                THIS IS THE SIZE OF A FAMILY ROOM
              </td>
            </tr>
            <tr>
              <td>
                15X12.5
              </td>
              <td>
                THIS IS THE SIZE OF A THRE BEDROOM APARTMENT
              </td>
            </tr>
            <tr>
              <td>
                15X25
              </td>
              <td>
                THIS IS THE SIZE OF A FOUR BEDROOM APARTMENT
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
<MainFooter/>
</div>
  }
}