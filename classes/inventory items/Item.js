class Item {
    constructor(name, type, damage) {
        this.name = name;
        this.type = type;
        this.damage = damage;
    }

    use(target) {
        target.takeDamage(this.damage);
    }

}