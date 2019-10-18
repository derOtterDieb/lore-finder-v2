import React, { Component } from 'react';
import '../App.css';

const TextDataDialogue = ({ textDataDialogue }) => {
    console.log(textDataDialogue);
    return (
        <div>
            <span className="Who">
                {textDataDialogue.Npc ? textDataDialogue.Npc[1] : '???'}
            </span>&nbsp;:&nbsp;
            <i>{textDataDialogue.Text}</i>
        </div>
    );
}

const TextDataJournals = ({ textDataJournal }) => {
    return (
        <div>
            <span className="Describer">
                Journal
            </span>&nbsp;:&nbsp;
            <i>{textDataJournal.Text}</i>
        </div>
    );
}

const TextDataQA_Answers = ({ textDataQA_Answer }) => {
    return (
        <div>
            <span className="Describer">
                WoL
            </span>&nbsp;:&nbsp;
            <i>{textDataQA_Answer.Text}</i>
        </div>
    );
}

class FfxivItemDetails extends Component {
    constructor(props) {
      super(props);
      this.fetchDetail = this.fetchDetail.bind(this);
    }

    state = {
      details: {},
      textDataDialogues: [],
      textDataJournals: [],
      textDataQA_Answers: [],
    }
    componentDidMount() {
        this.fetchDetail(this.props.url)
    }
    fetchDetail(url) {
        fetch(url)
            .then(res => res.json())
            .then((data) =>{
                this.setState({ 
                    details: data,
                    textDataDialogues: data.TextData_fr ? data.TextData_fr.Dialogue ? data.TextData_fr.Dialogue : [] : [],
                    textDataJournals: data.TextData_fr ? data.TextData_fr.Journal ? data.TextData_fr.Journal : [] : [],
                    textDataQA_Answers: data.TextData_fr ? data.TextData_fr.QA_Answer ? data.TextData_fr.QA_Answer : [] : []
                });
            })
            .catch(console.log);
    }

    render() {
        var item = this.state.details;
        return(
            <ul>
                <li>
                    <span className="Describer">
                        Ic&ocirc;ne
                    </span>&nbsp;:&nbsp;
                    <img className="App-logo" src={item.Icon ? 'https://xivapi.com' + item.Icon : ''}/>
                </li>
                <li>
                    <span className="Describer">
                        Int&eacute;gr&eacute; au patch
                    </span>&nbsp;&nbsp;
                    {item.GamePatch ? item.GamePatch.Name_fr ? item.GamePatch.Name_fr : '-' : '-'}
                </li>
                <li>
                    <span className="Describer">
                        Nom alternatif
                        </span>&nbsp;:&nbsp;
                        {item.Name_fr ? item.Name_fr : ''}
                    </li>
                <li>
                    <span className="Describer">
                        Texte alternatif
                    </span>&nbsp;:&nbsp;
                    <i>{item.Text0_fr ? item.Text0_fr : ''}&nbsp;{item.Text1_fr ? item.Text1_fr : ''}&nbsp;{item.Text2_fr ? item.Text2_fr : ''}</i>
                </li>
                <li>
                    <span className="Describer">Contenus des dialogues&nbsp;:</span>
                    <ul>
                    {this.state.textDataDialogues.map((textDataDialogue) => (
                        <li><TextDataDialogue key={textDataDialogue.Key} textDataDialogue={textDataDialogue} /></li>
                    ))}
                    </ul>
                    <ul>
                    {this.state.textDataJournals.map((textDataJournal) => (
                        <li><TextDataJournals key={textDataJournal.Key} textDataJournal={textDataJournal} /></li>
                    ))}
                    </ul>
                    <ul>
                    {this.state.textDataQA_Answers.map((textDataQA_Answer) => (
                        <li><TextDataQA_Answers key={textDataQA_Answer.Key} textDataQA_Answer={textDataQA_Answer} /></li>
                    ))}
                    </ul>
                </li>
            </ul>
        );
    }
}

const Item = ({ item }) => {
    return (
        <div className="Item">
            <h3>{item.Data ? item.Data.Name_fr ? item.Data.Name_fr : 'Nom introuvable' : 'Nom introuvable'}</h3>
            <ul>
                <li>
                    <span className="Describer">
                        Nom anglais
                    </span>&nbsp;:&nbsp;
                    <i>{item.Data ? item.Data.Name_en ? item.Data.Name_en : 'Nom anglais introuvable' : 'Nom anglais introuvable'}</i>
                </li>
                <li>
                    <span className="Describer">
                        Texte
                    </span>&nbsp;:&nbsp;
                    <i>{item.Text_fr ? item.Text_fr : 'Texte introuvable'}</i>
                </li>
                <h4>D&eacute;tails :</h4>
                <FfxivItemDetails url={
                    item.Data ?
                    item.Data.Url ? 'https://xivapi.com' + item.Data.Url : '' :
                    (item.Source && item.SourceID) ? 'https://xivapi.com/' + item.Source + '/' + item.SourceID : ''}
                />
            </ul>
        </div>
    );
}

const FfxivApiResults = ({ ffxivApiResults }) => {
    console.log(ffxivApiResults);
    return (
        <div>
            {ffxivApiResults.map((item) => (
                <Item key={item.ID} item={item} />
            ))}
        </div>
    );
}

export default FfxivApiResults;