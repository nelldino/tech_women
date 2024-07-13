//TWO FER 

// Introduction
// In some English accents, when you say "two for" quickly, it sounds like "two fer". Two-for-one is a way of saying that if you buy one, you also get one for free. So the phrase "two-fer" often implies a two-for-one offer.

// Imagine a bakery that has a holiday offer where you can buy two cookies for the price of one ("two-fer one!"). You take the offer and (very generously) decide to give the extra cookie to someone else in the queue.

// Instructions
// Your task is to determine what you will say as you give away the extra cookie.

// If you know the person's name (e.g. if they're named Do-yun), then you will say:

// One for Do-yun, one for me.
// If you don't know the person's name, you will say you instead.

// One for you, one for me.

export function twoFer(name:string = 'you'): string {

      return `One for ${name}, one for me.`
    }

//RESISTOR COLOR DUO

// Instructions
// If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:

// Each resistor has a resistance value.
// Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
// To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

// The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.

// In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take color names as input and output a two digit number, even if the input is more than two colors!

// The band colors are encoded as follows:

// Black: 0
// Brown: 1
// Red: 2
// Orange: 3
// Yellow: 4
// Green: 5
// Blue: 6
// Violet: 7
// Grey: 8
// White: 9
// From the example above: brown-green should return 15 brown-green-violet should return 15 too, ignoring the third color.

const colors: string[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  export function decodedValue(input: string[]): number {
    
     return Number (`${colors.indexOf(input[0])}${colors.indexOf(input[1])}`);
   
  }


  //RNA TRANSCRIPTION

//   Introduction
//   You work for a bioengineering company that specializes in developing therapeutic solutions.
  
//   Your team has just been given a new project to develop a targeted therapy for a rare type of cancer.
  
//   Note
//   It's all very complicated, but the basic idea is that sometimes people's bodies produce too much of a given protein. That can cause all sorts of havoc.
  
//   But if you can create a very specific molecule (called a micro-RNA), it can prevent the protein from being produced.
  
//   This technique is called RNA Interference.
  
//   Instructions
//   Your task is determine the RNA complement of a given DNA sequence.
  
//   Both DNA and RNA strands are a sequence of nucleotides.
  
//   The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
  
//   The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
  
//   Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
  
//   G -> C
//   C -> G
//   T -> A
//   A -> U

export function toRna(dna: string): string {
    const dnaToRnaMap: { [key: string]: string } = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    };

    return dna.split('').map(nucleotide => {
        const rnaNucleotide = dnaToRnaMap[nucleotide];
        if (!rnaNucleotide) {
            throw new Error("Invalid input DNA.");
        }
        return rnaNucleotide;
    }).join('');
}

  //SPACE AGE

//   Instructions
//   Given an age in seconds, calculate how old someone would be on:
  
//   Mercury: orbital period 0.2408467 Earth years
//   Venus: orbital period 0.61519726 Earth years
//   Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
//   Mars: orbital period 1.8808158 Earth years
//   Jupiter: orbital period 11.862615 Earth years
//   Saturn: orbital period 29.447498 Earth years
//   Uranus: orbital period 84.016846 Earth years
//   Neptune: orbital period 164.79132 Earth years
//   So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
  
//   If you're wondering why Pluto didn't make the cut, go watch this YouTube video.
  
//   Note: The actual length of one complete orbit of the Earth around the sun is closer to 365.256 days (1 sidereal year). The Gregorian calendar has, on average, 365.2425 days. While not entirely accurate, 365.25 is the value used in this exercise. See Year on Wikipedia for more ways to measure a year.

const orbitalPeriods: { [key: string]: number } = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1.0,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
};

const earthYearInSeconds = 31557600;

export function age(planet: string, seconds: number): number {
    const normalizedPlanet = planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase();
    const orbitalPeriod = orbitalPeriods[normalizedPlanet];
    if (orbitalPeriod) {
        return parseFloat((seconds / (orbitalPeriod * earthYearInSeconds)).toFixed(2));
    } else {
        throw new Error(`Invalid planet name: ${planet}`);
    }
}

//PANAGRAM

// Introduction
// You work for a company that sells fonts through their website. They'd like to show a different sentence each time someone views a font on their website. To give a comprehensive sense of the font, the random sentences should use all the letters in the English alphabet.

// They're running a competition to get suggestions for sentences that they can use. You're in charge of checking the submissions to see if they are valid.

export function isPangram(sentence: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
    const letterSet = new Set<string>();

    for (const char of cleanedSentence) {
        letterSet.add(char);
    }
    return letterSet.size === alphabet.length;
}