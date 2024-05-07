import F26 from "./F26"
import Foiz from "./Foiz"



function Sms() {
  return (
    <div className="sms">
        <p className="sms_oy">1 oylik SMS lar</p>
        <hr />
        <p className="sms_um">Umumiy</p>
        <h3 className="sms_1000">1000 ta</h3>
        <hr/>
        <div style={{display:'flex', alignItems:'center'}}>
        <Foiz/>
            <div>
                <h3 className="sms_1000">740 ta</h3>
                <p className="sms_oy">yetib borgan</p>
            </div>
        </div>
        
        <div style={{display:'flex', alignItems:'start'}}>
            <F26/>
        <div>
            <h3 className="sms_1000">260 ta</h3>
            <p className="sms_oy">Hatolik bo’lgan</p>
        </div>
    </div>
        


    </div>
  )
}

export default Sms