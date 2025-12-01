export interface ActionsProps {
  class?: string
}

export interface ActionCardProps {
  /**
   * Color variant for the action card
   */
  color?: "violet" | "orange" | "pink" | "green"
  /**
   * Visual variant of the action card
   * - "outlined": White background with colored icon and outline
   * - "filled": Colored background with white icon
   */
  variant?: "outlined" | "filled"
  /**
   * Optional link URL for the action card
   */
  link?: string
  class?: string
}

export interface ActionCardIconProps {
  /**
   * FontAwesome icon array, e.g., ['fas', 'handshake']
   */
  icon: [string, string]
  class?: string
}

export interface ActionCardTitleProps {
  class?: string
}

export interface ActionCardDescriptionProps {
  class?: string
}
