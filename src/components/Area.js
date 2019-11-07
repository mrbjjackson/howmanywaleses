import React, { Component } from 'react'
import Select from 'react-select'

export default class Area extends Component {
    constructor(props) {
        super(props)

        this.state = {
            country1:'GBR',
            country2:'USA'
        }

    }

    addSesses(country) {
        if(country.slice(-1)==='s') {
            return country+'es'
        } else {
            return country+'s'
        }
    }
    
    render() {
        let country1Options = []
        country1Options = this.props.rawCountries.map((country) => {
            return { 
                value:country.Country_Code,
                label:this.addSesses(country.Country_Name)
            }
        })

        let country2Options = []
        country2Options = this.props.rawCountries.map((country) => {
            return { 
                value:country.Country_Code,
                label:country.Country_Name
            }
        })


        const countrySelect1Style = {
            option: (provided, state) => ({
              ...provided,
              backgroundColor: 'transparent',
              color: state.isSelected ? 'black' : 'black',
              padding: 10,
              textAlign:'left',
              ':hover': {
                  backgroundColor:'#dfdfdf'
              }
            }),
            control: (provided, state) => ({
              ...provided,
              fontSize: '70px',
              backgroundColor:'transparent',
              borderRadius:'20px',
              marginLeft:'50px',
              marginRight:'50px',
              border: state.isFocused ? 'none' : 'none',
              boxShadow: state.isFocused ? 'none' : 'none',
            }),
            singleValue: (provided, state) => ({
                ...provided,
                textAlign:'center',
                color: 'white',
                width:'100%',
                lineHeight:'1em',
                height:'1.2em'
            }),
            input: (provided, state) => ({
                ...provided,
                textAlign:'center',
                color: 'white',
                width:'auto',
                fontFamily:'Redressed'
            }),
            menu: (provided)=> ({
                ...provided,
              backgroundColor: 'rgba(255,255,255,0.9)',
            })
          }

          const countrySelect2Style = {
            option: (provided, state) => ({
              ...provided,
              backgroundColor: 'transparent',
              color: state.isSelected ? 'black' : 'black',
              padding: 10,
              textAlign:'left',
              ':hover': {
                  backgroundColor:'#dfdfdf'
              }
            }),
            control: (provided, state) => ({
              ...provided,
              fontSize: '48px',
              backgroundColor:'rgba(255,255,255,0.3)',
              border: state.isFocused ? 'none' : 'none',
              boxShadow: state.isFocused ? 'none' : 'none',
              borderRadius:'20px'
            }),
            singleValue: (provided, state) => ({
                ...provided,
                textAlign:'center',
                color: 'white',
                width:'100%',
                lineHeight:'1em',
                height:'1.2em'
            }),
            input: (provided, state) => ({
                ...provided,
                textAlign:'center',
                color: 'white',
                width:'auto',
                flexBasis:'auto',
                fontFamily:'Redressed'
            }),
            menu: (provided)=> ({
                ...provided,
              backgroundColor: 'rgba(255,255,255,0.9)',
            })
          }


        return (
            <div className="formHolder">
                <h2>How many</h2>

                    <Select 
                    id="country1Select"
                    className="countrySelect"
                    options={country1Options}
                    value={country1Options.find((option) => option.value === this.props.country1)}
                    onChange={(e) => this.props.country1Change(e.value)}
                    styles={countrySelect1Style}
                    />

                <h2>could you fit in</h2>

                <div className="country2Holder">
                    <Select
                    className="countrySelect"
                    id="country2Select"
                    options={country2Options}
                    value={country2Options.find((option) => option.value === this.props.country2)}
                    onChange={(e) => this.props.country2Change(e.value)}
                    styles={countrySelect2Style}
                    />

                    <span className="questionMark">?</span>
                </div>

            </div>
        )
    }
}


export function addSesses(country) {
    if(country.slice(-1)==='s') {
        return country+'es'
    } else {
        return country+'s'
    }
}