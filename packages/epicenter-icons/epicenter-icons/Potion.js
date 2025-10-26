import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 15C13 16.3807 11.8807 17.5 10.5 17.5C9.11929 17.5 8 16.3807 8 15', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 6L18 3.5L12.5 2V5M16.5 6L12.5 5M16.5 6L18 6.411M16.5 6L15.6587 8.99976M12.5 5L11 4.59476M12.5 5L11.5176 7.99727', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 15H19', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14.008 12L13.999 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Potion',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
