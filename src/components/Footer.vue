<template>
  <footer>
    <FooterLinks>
      <FooterCol title="About us">
        <FooterLink href="#">Vision & Mission</FooterLink>
        <FooterLink href="#">EDUC Values & Goals</FooterLink>
      </FooterCol>
      <FooterCol title="Members">
        <FooterLink href="#">University of Potsdam</FooterLink>
        <FooterLink href="#">University of Pécs</FooterLink>
        <FooterLink href="#">University of Cagliari</FooterLink>
        <FooterLink href="#">Joume I University</FooterLink>
        <FooterLink href="#">University of South-Eastern Norway</FooterLink>
        <FooterLink href="#">Masaryk University</FooterLink>
        <FooterLink href="#">University Paris Nanterre</FooterLink>
        <FooterLink href="#">University of Rennes</FooterLink>
      </FooterCol>
      <FooterCol title="Alliance">
        <FooterLink href="#">News</FooterLink>
        <FooterLink href="#">Calls</FooterLink>
        <FooterLink href="#">Events</FooterLink>
        <FooterLink href="#">Projects</FooterLink>
        <FooterLink href="#">Galleries</FooterLink>
        <FooterLink href="#">Resources</FooterLink>
      </FooterCol>
      <FooterCol title="Community">
        <FooterLink href="#">Students</FooterLink>
        <FooterLink href="#">Teachers</FooterLink>
        <FooterLink href="#">Staff</FooterLink>
        <FooterLink href="#">Researchers</FooterLink>
        <FooterLink href="#">Partners</FooterLink>
      </FooterCol>
    </FooterLinks>
    <FooterCopyright />
    <FooterBottom>
      <a href="#"
        ><font-awesome-icon :icon="['fas', 'cookie']" class="text-[16px]" />Cookies Note</a
      >
      <a href="#"
        ><font-awesome-icon :icon="['fas', 'newspaper']" class="text-[16px]" />Subscribe to
        newsletter</a
      >
      <a href="#"><font-awesome-icon :icon="['fas', 'book']" class="text-[16px]" />Imprint</a>
    </FooterBottom>
  </footer>
</template>

<script setup lang="ts">
import {
  FooterLinks,
  FooterCol,
  FooterLink,
  FooterBottom,
  FooterCopyright,
} from "./organisms/footer"
</script>
