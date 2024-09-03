class Weapon extends Item {
    constructor (name, damage) {
        super(name, 'Weapon', damage);
    }

    use(target) {
        super.use(target);
    }
}