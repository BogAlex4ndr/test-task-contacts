export const getFirstName = (person) => {
  return person.fields &&
    person.fields["first name"] &&
    person.fields["first name"][0] &&
    person.fields["first name"][0]["value"]
    ? person.fields["first name"][0]["value"]
    : null;
};

export const getLastName = (person) => {
  return person.fields &&
    person.fields["last name"] &&
    person.fields["last name"][0] &&
    person.fields["last name"][0]["value"]
    ? person.fields["last name"][0]["value"]
    : null;
};

export const getEmail = (person) => {
  return person.fields && person.fields.email && person.fields.email[0]
    ? person.fields.email[0].value
    : null;
};

export const getAvatar = (person) => {
  return person.avatar_url;
};

export const getTags = (person, styles) => {
  return person.tags.map((item) => (
    <p className={styles["tags"]} key={item.id}>
      {item.tag}
    </p>
  ));
};
