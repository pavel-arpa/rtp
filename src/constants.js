import bgAlpha from './components/bg/alpha.png'
import bgSigma from './components/bg/sigma.png'
import bgDelta from './components/bg/delta.png'
import bgOmega from './components/bg/omega.png'
import bgBetaElite from './components/bg/beta-elite.png'
import bgBetaOrange from './components/bg/beta-orange.png'
import bgBeta from './components/bg/beta.png'
import bgGamma from './components/bg/gamma.png'

import bigBgAlpha from './components/bg/big/alpha.png'
import bigBgSigma from './components/bg/big/sigma.png'
import bigBgDelta from './components/bg/big/delta.png'
import bigBgOmega from './components/bg/big/omega.png'
import bigBgBetaElite from './components/bg/big/beta-elite.png'
import bigBgBetaOrange from './components/bg/big/beta-orange.png'
import bigBgBeta from './components/bg/big/beta.png'
import bigBgGamma from './components/bg/big/gamma.png'

import badgeAlpha from './components/images/alpha.svg'
import badgeSigma from './components/images/sigma.svg'
import badgeDelta from './components/images/delta.svg'
import badgeOmega from './components/images/omega.svg'
import badgeBetaElite from './components/images/beta-elite.svg'
import badgeBetaOrange from './components/images/beta-orange.svg'
import badgeBeta from './components/images/beta.svg'
import badgeGamma from './components/images/gamma.svg'


export const categories = {
    alpha: {
        subtitle: 'Полипропиленовые трубы и фитинги PP-R',
        name: 'Система ALPHA - Полипропиленовые трубы и фитинги PP-R',
        bg: bgAlpha,
        bigBg: bigBgAlpha,
        badge: badgeAlpha,
        color: '#349ED4',
        items: [
            { name: 'Фитинги', count: 12 },
            { name: 'Запорная арматура', count: 34 },
            { name: 'Коллекторы', count: 2 },
            { name: 'Труба армированная', count: 17 },
            { name: 'Труба не армированная', count: 88 },
            { name: 'Оборудование для монтажа', count: 5 },
            { name: 'Материалы для монтажа', count: 7 },
            { name: 'Другое', count: 16 },
        ]
    },
    sigma: {
        subtitle: 'Запорная арматура и латунные резьбовые фитинги',
        name: 'Система SIGMA - Запорная арматура и латунные резьбовые фитинги',
        bg: bgSigma,
        bigBg: bigBgSigma,
        badge: badgeSigma,
        color: '#003C47',
        items: [
            { name: 'Фитинги резьбовые никелированные', count: 0 },
            { name: 'Запорная арматура', count: 34 },
            { name: 'Коллекторы', count: 2 },
            { name: 'Другое', count: 16 },

        ]
    },
    delta: {
        subtitle: 'Трубы PE-Xa / EVOH и аксиальные фитинги',
        name: 'Система DELTA - Трубы PE-Xa / EVOH и аксиальные фитинги',
        bg: bgDelta,
        bigBg: bigBgDelta,
        badge: badgeDelta,
        color: '#B92F2C',
        items: [
            { name: 'Фитинги', count: 12 },
            { name: 'Труба', count: 88 },
            { name: 'Оборудование для монтажа', count: 5 },
            { name: 'Материалы для монтажа', count: 7 },
            { name: 'Другое', count: 16 },
        ]
    },
    omega: {
        subtitle: 'Трубы и комплектующие для теплого пола PE-RT и PE-Xa',
        name: 'Система OMEGA - Трубы и комплектующие для теплого пола PE-RT и PE-Xa',
        bg: bgOmega,
        bigBg: bigBgOmega,
        badge: badgeOmega,
        color: '#23A2AB',
        items: [
            { name: 'Труба РЕ-Ха', count: 88 },
            { name: 'Труба PE-RT', count: 5 },
            { name: 'Материалы для монтажа', count: 7 },
        ]
    },
    betaElite: {
        subtitle: 'Малошумная канализация',
        name: 'Система BETA ELITE - Малошумная канализация',
        bg: bgBetaElite,
        bigBg: bigBgBetaElite,
        badge: badgeBetaElite,
        color: '#7E8E97',
        items: [
            { name: 'Фитинги', count: 12 },
            { name: 'Труба', count: 88 },
            { name: 'Оборудование для монтажа', count: 5 },
            { name: 'Материалы для монтажа', count: 7 },
        ]
    },
    betaOrange: {
        subtitle: 'Наружная канализация',
        name: 'Система BETA ORANGE - Наружная канализация',
        bg: bgBetaOrange,
        bigBg: bigBgBetaOrange,
        badge: badgeBetaOrange,
        color: '#80C2EC',
        items: [
            { name: 'Фитинги', count: 12 },
            { name: 'Труба', count: 88 },
            { name: 'Труба Пиарком', count: 5 },
            { name: 'Материалы для монтажа', count: 7 },
        ]
    },
    beta: {
        subtitle: 'Внутренняя канализация',
        name: 'Система BETA - Внутренняя канализация',
        bg: bgBeta,
        bigBg: bigBgBeta,
        badge: badgeBeta,
        color: '#EE741D',
        items: [
            { name: 'Фитинги', count: 12 },
            { name: 'Труба Baikal', count: 88 },
            { name: 'Труба Пиарком', count: 5 },
            { name: 'Труба RTP', count: 5 },
            { name: 'Материалы для монтажа', count: 7 },
        ]
    },
    gamma: {
        subtitle: 'Трубы ПНД и компрессионные фитинги',
        name: 'Система GAMMA - Трубы ПНД и компрессионные фитинги',
        bg: bgGamma,
        bigBg: bigBgGamma,
        badge: badgeGamma,
        color: '#2A4A8A',
        items: [
            { name: 'Фитинги', count: 12 },
            { name: 'Труба', count: 88 },
            { name: 'Оборудование для монтажа', count: 5 },
            { name: 'Материалы для монтажа', count: 7 },
            { name: 'Другое', count: 16 },
        ]
    },
}