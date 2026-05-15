interface IConfiguration {
  type: string;
  value: string | number | object;
}

// Not knowing the exact value of of value is of the configuration will generate issues
// and it might force other classes to break the open close principle
export default class CarBuilderTwo {
  private readonly configuration: Readonly<IConfiguration>[] = [];

  addConfiguration(config: IConfiguration) {
    this.configuration.push(config);
  }

  build() {
    const config = structuredClone(this.configuration);
    return config;
  }
}
