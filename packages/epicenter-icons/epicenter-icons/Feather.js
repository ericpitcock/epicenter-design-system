import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.89462 10.1187C7.32227 10.6825 7 11.4524 7 12.2558V17H11.7442C12.5476 17 13.3175 16.6777 13.8813 16.1054L19.7785 10.1192C21.4072 8.4906 21.4072 5.85006 19.7785 4.22144C18.1499 2.59285 15.5094 2.59285 13.8808 4.22145L7.89462 10.1187Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21L15 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 12H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Feather',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
