import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    //verificar se o usuario existe

    const userExists = await this.usersRepository.findOne({
      email,
    });

    if (userExists) {
      return userExists;
    }

    //se nao existir, salvar no DB

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    //se existir retornar user

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }

  async findByID(user_id: string) {
    const user = await this.usersRepository.findOne({ id: user_id });

    return user;
  }
}

export { UsersService };
