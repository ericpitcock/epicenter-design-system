import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.50021 9.00005H6.28072C5.82185 9.00005 5.42186 9.31235 5.31057 9.75752L3.31057 17.7575C3.15279 18.3887 3.63015 19.0001 4.28072 19.0001H19.7194C20.37 19.0001 20.8474 18.3887 20.6896 17.7575L18.6896 9.75755C18.5783 9.31239 18.1783 9.00009 17.7194 9.00008L15.0002 9.00005', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9999 12V19.0001M19.4999 14H4.49994', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 19V22M12 22H14M12 22H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.5 2L10 5.5H14L11.5 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SolarPanel04',
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
