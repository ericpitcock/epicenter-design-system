import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 15V22M17 15V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 14V15H18V14C18 13.0917 17.4538 12.2724 16.6154 11.9231C13.6615 10.6923 10.3385 10.6923 7.38462 11.9231C6.54616 12.2724 6 13.0917 6 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 12L6.32985 5.29851C6.15325 3.53246 7.5401 2 9.31496 2H14.685C16.4599 2 17.8468 3.53246 17.6701 5.29851L17 12', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 18L17 18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chair02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
