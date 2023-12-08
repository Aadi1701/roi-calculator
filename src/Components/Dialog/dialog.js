import { type } from '@testing-library/user-event/dist/type'
import React, { useRef, useState } from 'react'
import classes from './style.module.css'


export const Dialog=()=>{
    const inputRef = useRef(null)
    const onChange=()=>{
        {
            setInputValue(inputRef.current.value)
        }
        // console.log(inputRef.current.value)
    }
    const hideShowDetails=()=>{
        setShow(!show)
    }
    const [inputValue,setInputValue] = useState('0.00')
    const [show,setShow] = useState(false)

    return(
        <div className={classes.background}>
            <main className={classes.dialogBody}>
                
                <header className={classes.titleBar}>
                    <h2>ROI Calculator</h2>
                    <i class="fas fa-times"></i>
                </header>
                
                {/* <span className={classes.currency}>USD</span> */}
                <input className={classes.input} ref={inputRef} value ={inputValue} onChange={onChange}/>
                
                <div className={classes.buttonContainer}>
                    <div>
                        <button className={classes.Button} onClick={()=>{setInputValue('1000')}}>$1000</button>
                        <button className={classes.Button} onClick={()=>{setInputValue('100')}}>$100</button>
                    </div>
                    <h4>~CAKE 0.000</h4>
                </div>
                
                <h3 style={{marginLeft:'5%'}}>TimeFrame</h3>
                
                <div className={classes.timeFrameChip}>
                    <button className={classes.timeFrameButton} style={{backgroundColor:'gold'}}>1 Day</button>
                    <button className={classes.timeFrameButton}>7 Days</button>
                    <button className={classes.timeFrameButton}>30 Days</button>
                    <button className={classes.timeFrameButton}>1 Year</button>
                    <button className={classes.timeFrameButton}>5 Year</button>
                </div>
                
                <div style={{display:'flex',marginLeft:'5%',justifyContent:'space-between'}}>
                    <h3>Enable Accelerated APY</h3>
                    {/* <label className={classes.switch}>
                        <input type="checkbox" checked/>
                        <span className={classes.slider}></span>
                    </label> */}
                </div>
                
                <div className={classes.timeFrameChip}>
                    <button className={classes.timeFrameButton} style={{backgroundColor:'gold'}}>Tier 1</button>
                    <button className={classes.timeFrameButton}>Tier 2</button>
                    <button className={classes.timeFrameButton}>Tier 3</button>
                    <button className={classes.timeFrameButton}>Tier 4</button>
                    <button className={classes.timeFrameButton}>Tier 5</button>
                </div>
                
                <h3 style={{textAlign:'right',color:'grey',marginRight:'2%'}}>ROI at Current Rates</h3>
                
                <input className={classes.input} type={'number'}/>
                
                <h5 style={{textAlign:'right',color:'grey',marginRight:'2%'}}>~0.000CAKE+0.00000DON</h5>
                
                <button className={classes.accordion} onClick={hideShowDetails}>{show?'Hide Details':'Show Details'}</button>
                
                <div className={classes.panel} style={{display:show?'block':'none'}}>
                    
                    <div style={{display:'flex',marginLeft:'5%',justifyContent:'space-between'}}>
                        <h3>APY</h3>
                        <h3 style={{color:'gold',marginRight:'5%'}}> 9%</h3>
                    </div>
                    
                    <div className={classes.details}>
                        <ul className={classes.detailList}>
                            <li>Calculated based on Current Rates</li>
                            <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns</li>
                        </ul>
                    </div>

                </div>
            </main>
        </div>
    )
}