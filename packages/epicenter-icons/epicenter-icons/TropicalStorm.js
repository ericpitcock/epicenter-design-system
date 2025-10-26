import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.0386 15.0005C13.7038 15.0005 15.0537 13.6573 15.0537 12.0003C15.0537 10.3433 13.7038 9 12.0386 9C10.3734 9 9.02356 10.3433 9.02356 12.0003C9.02356 13.6573 10.3734 15.0005 12.0386 15.0005Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 4.46589L16.5337 6.64214C18.0428 7.93196 19 9.8537 19 12C19 19.3309 9.63864 20.9502 4 19.5341L7.46626 17.3579C5.95725 16.068 5 14.1464 5 12C5 4.66918 14.3613 3.04976 20 4.46589Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TropicalStorm',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
