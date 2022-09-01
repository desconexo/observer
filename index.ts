
import { Subject } from "./subject"
import { UserFactory } from './user_factory'
import { ChatFactory } from './chat_factory'

let userJose = UserFactory.of("Jose", "jose@mail.com", new Subject())
let userCarlos = UserFactory.of("Carlos", "carlos@mail.com", new Subject())

let chatJose = ChatFactory.of(userJose)
let chatCarlos = ChatFactory.of(userCarlos)

userJose.subject.register(chatCarlos)
userCarlos.subject.register(chatJose)

userJose.subject.notify("Teste de mensagem do Jose")
userCarlos.subject.notify("Teste de mensagem do Carlos")

userCarlos.subject.unregister(chatJose)

userJose.subject.notify("Segundo teste de mensagem do Jose")
userCarlos.subject.notify("Segundo teste de mensagem do Carlos")