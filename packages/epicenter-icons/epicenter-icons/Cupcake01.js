import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 12L16.7562 20.2965C16.6094 21.2756 15.7683 22 14.7783 22H9.15985C8.19742 22 7.37147 21.3145 7.19411 20.3686L6 14', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 10C8.04103 10.4949 6 9.5 6.48618 7.54383M6.48618 7.54383C5.07413 7.78754 4 9.51833 4 11C4 12.6569 5 14 7 14C9 14 16 13 16 13C18.5 12.5 20 11 20 9.5C20 7.29086 18.2091 6 16 6C16 3.79086 14.2091 2 12 2C12 2 12 4 10 5C9 5.5 6.97235 5.58766 6.48618 7.54383Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cupcake01',
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
