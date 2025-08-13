export interface CardProps {
  variant?: "default" | "primary" | "secondary" | "gradient"
  /**
   * Applies only when variant === "gradient". Controls the gradient colors.
   * pinkOrange: #F96E99 → #FF9880
   * greenYellow: #28BE7F → #E8DD79
   * purplePink: #9D76E5 → #F96E99
   */
  gradient?: "pinkOrange" | "greenYellow" | "purplePink"
  class?: string
}
