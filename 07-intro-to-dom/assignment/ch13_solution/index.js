/*
 *
 * Eloquent JavaScript
 * Chapter 13, Build a Table Solution
 *
 * This exercise will test your understanding of:
 *  1. Creating and working with DOM nodes
 *  2. Looping
 *  3. Working with Objects and Arrays
 *
 * I broke this exercise into two parts. Before the first part,
 * we have some initial setup: namely, creating our <table>
 * element.
 *
 * The first part is getting the table headings (<th>). These
 * should be comprised of the keys of the objects. We can use
 * `Object.keys()` to get an array of an object's keys, then 
 * loop over that array creating a <th> element inside the loop.
 * Once we've created our <th> element, we add it to a <tr> element,
 * that we then add to our <table> after the loop has finished.
 *
 * The second part requires looping over the data itself. We need to
 * use a nested loop: the outer loop goes over the array of mountains,
 * the inner loop goes overy the keys of the object. Inside the inner 
 * loop, we can use the current key to loop up a value in the current 
 * mountain. With each iteration of the inner loop, we create a <td>
 * that we add to a <tr> element that we create with eac hiteration of 
 * the outer loop. Then, after our inner loop has finished (and our <tr>
 * is all built out) we add it to the <table>.
 *
 * At the end of the function, we return the completed <table>.
 *
 */


const mountains = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
]

function buildTable( data ) {
  // make a table that we will eventuall return
  let table = document.createElement('table')

  // first, get the keys from the first object, so that
  // we can use them to make the <th> rows and add them to
  // the table
  let headings = Object.keys( data[0] )
  let firstRow = document.createElement('tr')

  headings.forEach( heading => {
    let th = document.createElement('th')
    th.textContent = heading
    firstRow.appendChild( th )
  })

  /*
   * This firstRow looks something like this:
   * <tr>
   *  <th>name</th>
   *  <th>height</th>
   *  <th>country</th>
   * </tr>
   */
  table.appendChild( firstRow ) // add it to the table

  // second, loop through the data array, then loop through 
  // the keys to create each <td> and append it to the <tr>
  data.forEach( obj => {
    let keys = Object.keys( obj )
    let tr = document.createElement('tr')

    for ( let i = 0; i < keys.length; i++ ) {
      let td = document.createElement('td')

      td.textContent = obj[ keys[i] ]
      tr.appendChild( td )

    }

    /*
     * The table row looks like this at this point:
     * <tr>
     *  <td>Kilimanjaro</td>
     *  <td>5895</td>
     *  <td>Tanzania</td>
     * </tr>
     */
    table.appendChild( tr )

  })

  // at this point our <table> is built out!
  return table

}

const mountainsTable = buildTable( mountains )
document.querySelector('#app').appendChild( mountainsTable )
