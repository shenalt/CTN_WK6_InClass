//Votes
const kamalaVotes = '4619195';
const trumpVotes = '3578899';

//Convert the Numbers
const kamala = Number(kamalaVotes)
const trump = Number(trumpVotes)
console.log(typeof(kamala) + " " + typeof(trump))

//Write a function to calculate the share of votes each candidate got and save it to variables

function calcVoteShare(kamalaVote, TrumpVote){
    const kamalaShare = (kamalaVote / 8198094).toFixed(2);
    const trumpShare = (TrumpVote / 8198094).toFixed(2);

    const shareArr = [kamalaShare, trumpShare]
    return shareArr
}

//Write a console.log that prints out a message of the result

const answer = calcVoteShare(kamala, trump)
console.log(answer)