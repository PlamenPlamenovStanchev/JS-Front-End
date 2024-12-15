const object = {}

const key = 'secret';

object.property = 'Stuff';
object['property'] = 'Stuff';

object[key] = 'It is secret!';
object['John Smith'] = 'It is secret!';
