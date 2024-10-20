export interface Character {
    character_id:   number;
    character_name: string;
    skills:         Skill[];
}

export interface Skill {
    active_skill_level:   number;
    skill_id:             number;
    skillpoints_in_skill: number;
    trained_skill_level:  number;
}

export type GroupStatus = 'available' | 'requested' | 'confirmed'

export interface Group {
    id:             number;
    name:           string;
    description:    string | null;
    image_url:      string | null;
    officers?:      number[];
    directors?:     number[];
    members:        number[];
}

export interface SigRequest {
    id:             number;
    user:           number;
    sig_id:         number;
    approved:       boolean | null;
    approved_by:    number | null;
    approved_at:    Date;
}

export interface TeamRequest {
    id:             number;
    user:           number;
    team_id:        number;
    approved:       boolean | null;
    approved_by:    number | null;
    approved_at:    Date;
}

export type CorporationType = 'alliance' | 'associate' | 'militia' | 'public'

export interface Corporation {
    corporation_id:     number;
    corporation_name:   string;
    alliance_id:        number;
    alliance_name:      string;
    faction_id:         number;
    faction_name:       string;
    type:               CorporationType;
    introduction:       string;
    biography:          string;
    timezones:          string[];
    requirements:       string[];
    members:            CharacterCorp[];
    active:             boolean;
}

export interface CorporationInfo {
    corporation_id:     number;
    corporation_name:   string;
    alliance_id:        number;
    alliance_name:      string;
    faction_id:         number;
    faction_name:       string;
    type:               CorporationType;
    introduction:       string;
    biography:          string;
    timezones:          string[];
    requirements:       string[];
    active:             boolean;
}

export interface CharacterCorp {
    character_id:           number;
    character_name:         string;
    primary_character_id:   number;
    primary_character_name: string;
    registered:             boolean;
    exempt:                 boolean;
}

export interface CorporationApplication {
    status:         string;
    application_id: number;
    user_id:        number;
    corporation_id: number;
}

export interface CorporationApplicationDetails {
    status:         string;
    application_id: number;
    user_id:        number;
    corporation_id: number;
    description:    string;
    created_at:     Date;
    updated_at:     Date;
    characters:     Character[];
}

export interface Character {
    character_id:   number;
    character_name: string;
}

export interface UserProfile {
    user_id:               number;
    username:              string;
    permissions:           string[];
    is_superuser:          boolean;
    eve_character_profile: EveCharacterProfile | null;
    discord_user_profile:  DiscordUserProfile | null;
}

export interface DiscordUserProfile {
    id:          number;
    discord_tag: string;
    avatar:      string | null;
}

export interface EveCharacterProfile {
    character_id:     number;
    character_name:   string;
    corporation_id:   number;
    corporation_name: string;
    scopes:           string[];
}

export interface CharacterSkillset {
    name:           string;
    progress:       number;
    missing_skills: string[];
}

export interface CharacterAsset {
    type_id:        number;
    type_name:      string;
    location_id:    number;
    location_name:  string;
}

export interface Fitting {
    id:             number;
    name:           string;
    ship_id:        number;
    description:    string;
    created_at:     Date;
    updated_at:     Date;
    tags:           string[];
    eft_format:     string;
    latest_version: string;
}

export type DoctrineTypes = 'shield' | 'armor' | 'armorshield'

export interface Doctrine {
    id:                 number;
    name:               string;
    type:               DoctrineTypes;
    created_at:         Date;
    updated_at:         Date;
    description:        string;
    primary_fittings:   Fitting[];
    secondary_fittings: Fitting[];
    support_fittings:   Fitting[];
    sig_ids:            number[];
}

export const fleet_types = ['strategic', 'non_strategic', 'training'] as const
export type FleetTypes = typeof fleet_types[number]

export interface Fleet {
    id:                 number;
    type:               FleetTypes;
    audience?:          string;
    description:        string;
    start_time:         Date;
    fleet_commander?:   number;
    doctrine_id:        number;
    location:           string;
    disable_motd:       boolean;
    tracking?:          Tracking;
}

export interface FleetBasic {
    id:                 number;
    audience:           string;
}

export interface Tracking {
    id:             number;
    start_time:     Date;
    end_time:       Date;
    is_registered:  boolean;
}

export interface FleetRequest {
    type:           FleetTypes;
    description:    string;
    start_time:     Date;
    doctrine_id:    number;
    location_id:    number;
    audience_id:    number;
    disable_motd:   boolean;
}

export interface MumbleInformation {
    username:   string,
    password:   string,
    url:        string
}

export interface Audience {
    id:                     number;
    display_name:           string;
    display_channel_name:   string;
}

export interface FleetMember {
    character_id: number,
    character_name: string,
    ship_type_id: number,
    ship_type_name: string,
    solar_system_id: number,
    solar_system_name: string,
}

export interface Location {
    location_id:        number;
    location_name:      string;
    solar_system_id:    number;
    solar_system_name:  string;
}

export interface FleetUsers {
    fleet_id:   number;
    user_ids: number[];
}

export interface StructureTimer {
    id:                 number;
    name:               string;
    state:              string;
    type:               string;
    timer:              Date;
    created_at:         Date;
    updated_at:         Date;
    created_by:         number;
    updated_by:         number;
    system_name:        string;
    corporation_name:   string;
    alliance_name:      string;
    structure_id:       number;
}

export const structure_states = [ 'anchoring', 'armor', 'hull', 'unanchoring' ] as const
export type StructureState = typeof structure_states[number]

export const structure_types = [
    'astrahus',
    'fortizar',
    'keepstar',
    'raitaru',
    'azbel',
    'sotiyo',
    'athanor',
    'tatara',
    'tenebrex_cyno_jammer',
    'pharolux_cyno_beacon',
    'ansiblex_jump_gate',
    'orbital_skyhook',
    'metenox_moon_drill',
] as const
export type StructureType = typeof structure_types[number]

export interface StructureTimerRequest {
    selected_item_window:   string;
    corporation_name:       string;
    state:                  StructureState;
    type:                   StructureType;
}

export interface VerifyStructureTimerRequest {
    corporation_name:   string;
    alliance_name:      string;
}

export interface Post {
    post_id:            number;
    state:              PostStates;
    title:              string;
    seo_description:    string;
    slug:               string;
    content?:           string;
    date_posted:        Date;
    user_id:            number;
    tag_ids:            number[];
}

export interface PostParams {
    title?:             string;
    seo_description?:   string;
    state?:             PostStates;
    content?:           string;
    tag_ids?:           number[];
}

export interface PostTag {
    tag_id:     number;
    tag:        string;
}

export const post_states = [ 'draft', 'published', 'trash' ] as const
export type PostStates = typeof post_states[number]

export interface FreightRoute {
    orgin:          FreightLocation;
    destination:    FreightLocation;
    bidirectional:  boolean;
    route_id:       number;
}

export interface FreightLocation {
    location_id:    number;
    name:           string;
    short_name:     string;
}

export interface RouteOptions {
    route_option_id:    number;
    maximum_m3:         number;
}

export interface RouteCost {
    route_id:   number;
    cost:       number;
}

export interface DoctrineComposition {
    ideal_fleet_size:   number;
    composition:        Ships[];
}

export interface Ships {
    fitting:            Fitting;
    ideal_ship_count:   number;
}

export interface SystemMoon {
    id:         number;
    system:     string;
    planet:     string;
    moon:       number;
    detail:     SystemMoonDetails;
}

export interface SystemMoonDetails {
    monthly_revenue?:   number;
    reported_by:        string;
}

export interface MoonSummarySystem {
    system:         string;
    scanned_moons:  number;
}