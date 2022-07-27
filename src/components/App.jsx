import  Statistic  from './Button/Button'

export const App = () => {
  return (
    <div
      style={{
        height: '500px',
        width: '400px',
        display: 'block',
        justifyContent: 'center',
        backgroundColor: 'orange',
        fontSize: 40,
        color: '#010101',
        margin: '20px',
        padding: '20px',
      }}
    >

      Please leave feedback
       <Statistic/>
       
    </div>
  );
};
