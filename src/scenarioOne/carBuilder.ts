const INTERIOR_MATERIALS = {
  CLOTH: "Cloth",
  LEATHER: "Leather",
  VINYL: "Vinyl",
  VEGAN: "Vegan Leather",
} as const;

type InteriorMaterials =
  (typeof INTERIOR_MATERIALS)[keyof typeof INTERIOR_MATERIALS];

type MotorSpecs = {
  horsepower: string;
  type: string;
};

type SoundSystem = {
  totalPower: string;
  speakerCount: number;
};

type TireSpecs = {
  size: number;
  recommendedPressure: number;
};

interface ICarBuilderConfiguration {
  motorSpecs: MotorSpecs;
  gps?: boolean;
  interiorMaterials: InteriorMaterials;
  keylessEntry?: boolean;
  soundSystem?: SoundSystem;
  spareTire?: boolean;
  sunRoof?: string;
  tires: TireSpecs;
  wirelessCharging?: boolean;
}

interface ICarBuilder {
  addEngineSpecs(motorSpecs: MotorSpecs): this;
  addGps(): this;
  addInterior(interiorMaterials: InteriorMaterials): this;
  addKeylessEntry(): this;
  addSoundSystem(soundSystem: SoundSystem): this;
  addSpareTire(): this;
  addSunRoof(sunRoof: string): this;
  addTires(tires: TireSpecs): this;
  addWirelessCharging(): this; 
}

export class CarBuilder implements ICarBuilder {
  private configuration: ICarBuilderConfiguration;
  private _defaultConfiguration: ICarBuilderConfiguration = {
    tires: {
      size: 18,
      recommendedPressure: 35,
    },
    motorSpecs: {
      horsepower: "300 hp",
      type: "V6",
    },
    interiorMaterials: INTERIOR_MATERIALS.LEATHER,
  };

  constructor() {
    this.configuration = this._defaultConfiguration;
  }

  addEngineSpecs(motorSpecs: MotorSpecs) {
    this.configuration = { ...this.configuration, motorSpecs };
    return this;
  }

  addGps() {
    this.configuration = { ...this.configuration, gps: true };
    return this;
  }

  addInterior(interiorMaterials: InteriorMaterials) {
    this.configuration = { ...this.configuration, interiorMaterials };
    return this;
  }

  addKeylessEntry() {
    this.configuration = { ...this.configuration, keylessEntry: true };
    return this;
  }

  addSoundSystem(soundSystem: SoundSystem) {
    this.configuration = { ...this.configuration, soundSystem };
    return this;
  }

  addSpareTire() {
    this.configuration = { ...this.configuration, spareTire: true };
    return this;
  }

  addSunRoof(sunRoof: string) {
    this.configuration = { ...this.configuration, sunRoof };
    return this;
  }

  addTires(tires: TireSpecs) {
    this.configuration = { ...this.configuration, tires };
    return this;
  }

  addWirelessCharging() {
    this.configuration = { ...this.configuration, wirelessCharging: true };
    return this;
  }

  reset() {
    this.configuration = this._defaultConfiguration;
  }

  build() {
    const config: Readonly<ICarBuilderConfiguration> = {
      ...this.configuration,
    };
    this.reset();
    return config;
  }
}
