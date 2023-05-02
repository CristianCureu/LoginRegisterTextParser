export const registerScreenStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    resizeMode: 'contain',
    width: '90%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
  },
  fontRed: {
    color: '#C1272D',
    fontSize: 18,
  },
  buttons: {
    width: '80%',
    height: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#0177BF',
  },
  errorButton: {
    backgroundColor: '#C1272D',
  },
  backButton: {
    backgroundColor: '#313C43',
  },
};

export const errorScreenStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  fontRed: {
    color: '#C1272D',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fontLight: {
    fontWeight: 600,
    textAlign: 'center',
  },
};
