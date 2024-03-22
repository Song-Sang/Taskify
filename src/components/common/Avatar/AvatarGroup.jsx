import Avatar from './Avatar';

// Todo(조예진) : 완성
export default function AvatarGroup({ isMobile, participants }) {
  const number = isMobile ? 2 : 4;
  const backgroundColors = [
    '#FFC85A',
    '#FDD446',
    '#9DD7ED',
    '#C4B1A2',
    '#F4D7DA',
  ];

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {participants && (
        <>
          {participants.slice(0, number).map((p, index) => (
            <span
              key={p.id}
              style={{
                marginLeft: `-${index > 0 ? 10 : 0}px`,
              }}
            >
              <Avatar
                size="large"
                text={p.email.charAt(0).toUpperCase()}
                backgroundColor={backgroundColors[index]}
              />
            </span>
          ))}
          {participants.length > number && (
            <span
              style={{
                marginLeft: '-10px',
              }}
            >
              <Avatar
                size="large"
                text={`+${participants.length - number}`}
                backgroundColor={backgroundColors[backgroundColors.length - 1]}
                textColorRed
              />
            </span>
          )}
        </>
      )}
    </>
  );
}
