
import React, { useState } from "react";

function App(){

    const Main  = [
        {
            "elementTypeName":"Beds & Bedding          ",
            "elementTypeCode":"3",
            "checked":false,
            "elementGroups":[
                {
                    "elementGroupName":"                        ",
                    "elementGroupCode":"0",
                    "elements":[
                        {
                            "elementCodeList":"GRI ",
                            "elementCode":"0011",
                            "elementCodeName":"King Bed                        "
                        },
                        {
                            "elementCodeList":"GRI ",
                            "elementCode":"0014",
                            "elementCodeName":"Queen Bed                       "
                        },
                        {
                            "elementCodeList":"GRI ",
                            "elementCode":"0010",
                            "elementCodeName":"Double Bed                      "
                        },
                        {
                            "elementCodeList":"GRI ",
                            "elementCode":"0019",
                            "elementCodeName":"Twin/Single Bed                 "
                        },
                        {
                            "elementCodeList":"RMA ",
                            "elementCode":"0067",
                            "elementCodeName":"Area is a Loft                  "
                        },
                        {
                            "elementCodeList":"GRI ",
                            "elementCode":"9000",
                            "elementCodeName":"Alternate Bed                   "
                        },
                        {
                            "elementCodeList":"RMA ",
                            "elementCode":"0102",
                            "elementCodeName":"Sofa Bed(s)                     "
                        },
                        {
                            "elementCodeList":"MRBE",
                            "elementCode":"0011",
                            "elementCodeName":"Trundle Bed(s)                  "
                        }
                    ]
                }
            ]
        },
        {
            "elementTypeName":"Kitchen Features        ",
            "elementTypeCode":"7",
            "checked":false,
            "elementGroups":[
                {
                    "elementGroupName":"                        ",
                    "elementGroupCode":"0",
                    "elements":[
                        {
                            "elementCodeList":"RMA ",
                            "elementCode":"0164",
                            "elementCodeName":"Mini-Fridge                     "
                        },
                        {
                            "elementCodeList":"RMA ",
                            "elementCode":"0068",
                            "elementCodeName":"Microwave Oven                  "
                        }
                    ]
                }
            ]
        },
        {
            "elementTypeName":"Room Features           ",
            "elementTypeCode":"8",
            "checked":false,
            "elementGroups":[
                {
                    "elementGroupName":"                        ",
                    "elementGroupCode":"0",
                    "elements":[
                        {
                            "elementCodeList":"MRRF",
                            "elementCode":"0001",
                            "elementCodeName":"Room Size                       "
                        },
                        {
                            "elementCodeList":"MRRF",
                            "elementCode":"0002",
                            "elementCodeName":"Room Size Range: Minimum        "
                        },
                        {
                            "elementCodeList":"MRRF",
                            "elementCode":"0003",
                            "elementCodeName":"Room Size Range: Maximum        "
                        },
                        {
                            "elementCodeList":"MRRF",
                            "elementCode":"0013",
                            "elementCodeName":"Sitting Area                    "
                        },
                        {
                            "elementCodeList":"MRRF",
                            "elementCode":"0014",
                            "elementCodeName":"Dining Area                     "
                        },
                        {
                            "elementCodeList":"MRRF",
                            "elementCode":"0015",
                            "elementCodeName":"Separate Dining Room            "
                        },
                        {
                            "elementCodeList":"MRRF",
                            "elementCode":"0016",
                            "elementCodeName":"Separate Living Room            "
                        }
                    ]
                }
            ]
        },
        {
            "elementTypeName":"Internet & Phones       ",
            "elementTypeCode":"9",
            "checked":false,
            "elementGroups":[
                {
                    "elementGroupName":"                        ",
                    "elementGroupCode":"0",
                    "elements":[
                        {
                            "elementCodeList":"MRIP",
                            "elementCode":"0007",
                            "elementCodeName":"Wireless Internet               "
                        },
                        {
                            "elementCodeList":"MRIP",
                            "elementCode":"0006",
                            "elementCodeName":"Ethernet Internet               "
                        },
                        {
                            "elementCodeList":"MRIP",
                            "elementCode":"0005",
                            "elementCodeName":"Dial-Up Internet                "
                        }
                    ]
                }
            ]
        },
        {
            "elementTypeName":"Food & Beverages        ",
            "elementTypeCode":"6",
            "checked":false,
            "elementGroups":[
                {
                    "elementGroupName":"                        ",
                    "elementGroupCode":"0",
                    "elements":[
                        {
                            "elementCodeList":"RMA ",
                            "elementCode":"0019",
                            "elementCodeName":"In-Room Coffee/Tea Maker        "
                        }
                    ]
                }
            ]
        },
        {
            "elementTypeName":"Entertainment           ",
            "elementTypeCode":"11",
            "checked":false,
            "elementGroups":[
                {
                    "elementGroupName":"                        ",
                    "elementGroupCode":"0",
                    "elements":[
                        {
                            "elementCodeList":"RMA ",
                            "elementCode":"0090",
                            "elementCodeName":"TV With Remote                  "
                        }
                    ]
                }
            ]
        }
    ]
    let [removeRightData, setremoveRightData] = useState(null);
    let [removeRightSubData, setRemoveSubData] = useState(null);
    const [checkbox, setcheckbox] = useState(false);
    let [updateOrder, setUpdateOrder] = useState(null);
 let [rightSideData,setRightSideData] = useState(Main);
 function handleChangeDownOrder(code, e) {
    if (e.target.checked === true) {
        setremoveRightData(e);

        setUpdateOrder(e.target.value);

    }
}
 const downArrow = async ()  => {
  
    const ucheckbox = document.querySelector("#checkBox" + updateOrder);
    if (rightSideData) {
        let arr = rightSideData;
        
        
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(JSON.stringify(arr[i].elementTypeCode));
            if (arr[i].elementTypeCode === updateOrder) {
                arr[i].checked=!false;

                //alert(updateOrder, arr[i].elementTypeCode);
                let parentIndex = arr.findIndex((id) => id.elementTypeCode === updateOrder);
                let newIndex = parseInt((arr.findIndex((id) => id.elementTypeCode === updateOrder)) + 1);
                console.log(newIndex);
                move(parentIndex, newIndex, arr);
            }

            // for (var j = arr[i].elementGroups[0].elements.length - 1; j >= 0; j--) {
            //     if (arr[i].elementGroups[0].elements[j].elementCode === updateOrder) {

            //         let childIndex = arr[i].elementGroups[0].elements.findIndex((id) => id.elementCode === updateOrder);

            //         let childNewIndex = parseInt((arr[i].elementGroups[0].elements.findIndex((id) => id.elementCode === updateOrder)) + 1);
            //         (move(childIndex, childNewIndex, arr[i].elementGroups[0].elements));

            //     }
            // }
            Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'checked')
                .set.call(ucheckbox, !ucheckbox.checked);
            setRightSideData([...arr]);
            
            //console.log(JSON.stringify(arr));
            
        }
        return false;
     }
    }
    function move(from, to, arr) {
        const newArr = arr;
        const item = newArr.splice(from, 1)[0];
        newArr.splice(to, 0, item);
        return newArr;
    }


 return (

    <div>
        <ul>
        { rightSideData.map((item, i) => (
             
            <li key={i}>
        <input type="checkbox" defaultChecked={item.checked} key={i} id={"checkBox" + item.elementTypeCode} value={item.elementTypeCode
} onChange={ (event) =>handleChangeDownOrder(item.elementTypeCode,event) }  /> {item.elementTypeName}</li> ))

}
</ul>
    {/* <button
        style={{ marginLeft: "95px" }}
        onClick={upArrow}
    /> */}
     <button
                                                                       
                                                                        onClick={downArrow}
                                                                    >Down </button>
    </div>
 );




}
export default App;